import classNames from "classnames"

interface TextInterface {
    type: string
    children?: string
    className?: string
}

const Text = ({ type, children, className }: TextInterface) => {
    return <>
        <p className="text"></p>
        {
            {
                "h1": <h1 className={classNames("text-[28px] leading-[29px] font-bold text-[#323A46]", className)}>{children}</h1>,
                "h2": <h2 className={classNames("text-2xl leading-[33px] font-bold text-[#323A46]", className)}>{children}</h2>,
                "h3": <h3 className={classNames("text-[22px] leading-[30px] font-bold text-[#323A46]", className)}>{children}</h3>,
                "h4": <h4 className={classNames("text-xl leading-[27px] font-bold text-[#323A46]", className)}>{children}</h4>,
                "h5": <h5 className={classNames("text-lg leading-[24px] font-bold text-[#323A46]", className)}>{children}</h5>,
                "main": <p className={classNames("text-base leading-[19px] font-bold text-[#323A46]", className)}>{children}</p>,
                "sub": <p className={classNames("text-sm leading-[19px] text-[#323A46]", className)}>{children}</p>,
                "small": <p className={classNames("text-[11px] leading-[15px] text-[#323A46]", className)}>{children}</p>,
            }[type] || <p className={classNames("text-sm leading-[19px] text-[#323A46]", className)}>{children}</p>
        }
    </>
}

export default Text