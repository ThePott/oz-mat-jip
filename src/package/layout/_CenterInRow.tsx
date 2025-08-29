import React from "react"

const CenterInRow = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div {...props} className="flex">
            <div className="grow" />
            {children}
            <div className="grow" />
        </div>
    )
}

export default CenterInRow
