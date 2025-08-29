interface AdditionalVstackProps {
    gap?: number
    center?: boolean
}

type VstackProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & AdditionalVstackProps

const Vstack = ({ gap = 3, center, className, children, ...props }: VstackProps) => {
    return (
        <div className="flex">
            {center && <div className="grow" />}
            <div {...props} className={`gap-${gap} ${className} flex flex-col`}>
                {children}
            </div>
            {center && <div className="grow" />}
        </div>
    )
}

export default Vstack
