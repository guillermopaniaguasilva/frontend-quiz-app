type DesktopLayoutProps = {
  children: React.ReactNode[];
};

export default function DesktopLayout({ children }: DesktopLayoutProps) {
  return (
    <div className="row w-100">
      <div className="col-6">{children[0]}</div>
      <div className="col-6">
        <div className="d-flex flex-column w-100">{children[1]}</div>
      </div>
    </div>
  );
}
