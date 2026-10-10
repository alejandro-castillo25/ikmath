import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


export default function Tex({
  children,
  className,
}: {children: string, className?: string}) {
  return (
    <div className={className}>
      <BlockMath>{`${children}`}</BlockMath>
    </div>
  );
}
