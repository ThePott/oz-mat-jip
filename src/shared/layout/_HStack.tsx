interface AdditionalHstackProps {
    gap?: number
}

type HstackProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & AdditionalHstackProps

const Hstack = ({gap=3, className, children, ...props}: HstackProps) => {
  return (
    <div {...props} className={`gap-${gap} ${className} flex`}>{children}</div>
  )
}

export default Hstack