import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


export default function Tex({
  children,
  className,
  ref,
}: {children: string, className?: string, ref?: React.Ref<HTMLDivElement>}) {
  return (
    <div className={className} ref={ref}>
      <BlockMath>{`${children}`}</BlockMath>
    </div>
  );
}
