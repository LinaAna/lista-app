type CaixaProps = {
    children: React.ReactNode;
  };

export default function Caixa({ children }: CaixaProps) {
    return <div className="p-4 border rounded-lg">{children}</div>
}

