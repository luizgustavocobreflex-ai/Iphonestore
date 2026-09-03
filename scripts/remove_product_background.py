from pathlib import Path
from PIL import Image
from collections import deque

root = Path('public/assets/iphone-17-pro-max')
files = [
    *list((root / 'hero').glob('*.webp')),
    *list((root / 'colors').glob('*.webp')),
    *list((root / 'angles').glob('*.webp')),
    *list((root / 'details').glob('*.webp')),
]

for source in files:
    image = Image.open(source).convert('RGBA')
    pixels = image.load()
    width, height = image.size
    sample_points = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    background = tuple(
        sum(int(pixels[x, y][channel]) for x, y in sample_points) // len(sample_points)
        for channel in range(3)
    )
    output = image.copy()
    output_pixels = output.load()
    queue = deque()
    visited = bytearray(width * height)
    threshold = 34

    for x in range(width):
        queue.extend(((x, 0), (x, height - 1)))
    for y in range(height):
        queue.extend(((0, y), (width - 1, y)))

    while queue:
        x, y = queue.popleft()
        index = y * width + x
        if visited[index]:
            continue
        visited[index] = 1
        red, green, blue, alpha = pixels[x, y]
        distance = sum(abs(int(value) - background[channel]) for channel, value in enumerate((red, green, blue)))
        if distance > threshold:
            continue
        output_pixels[x, y] = (red, green, blue, 0)
        if x > 0:
            queue.append((x - 1, y))
        if x < width - 1:
            queue.append((x + 1, y))
        if y > 0:
            queue.append((x, y - 1))
        if y < height - 1:
            queue.append((x, y + 1))

    bounds = output.getchannel('A').getbbox()
    if bounds:
        left, top, right, bottom = bounds
        output_width, output_height = output.size
        padding = max(8, int(max(right - left, bottom - top) * 0.035))
        output = output.crop((max(0, left - padding), max(0, top - padding), min(output_width, right + padding), min(output_height, bottom + padding)))

    destination = source.parent / 'transparent' / source.name
    destination.parent.mkdir(parents=True, exist_ok=True)
    output.save(destination, 'WEBP', lossless=True, method=6)
