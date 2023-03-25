import classNames from "classnames"

interface CardInterface {
    children: string | JSX.Element | JSX.Element[]
    className?: string
}

const Card = ({ children, className }: CardInterface) => {
    return <div className={classNames("bg-white rounded-[5px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.05)]", className)}>
        {children}
    </div>
}

export default Card