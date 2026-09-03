interface Props {
  x: number;
  y: number;
  label: string;
}

export default function CustomCursor({ x, y, label }: Props) {
  return (
    <>
      <div className="cursor-dot" style={{ left: x, top: y, width: label ? 0 : 8, height: label ? 0 : 8 }} />
      <div className="cursor-label" style={{ left: x, top: y, opacity: label ? 1 : 0 }}>
        {label}
      </div>
    </>
  );
}
