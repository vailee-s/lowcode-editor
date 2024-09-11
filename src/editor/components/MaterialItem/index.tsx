export interface MaterialItemProps {
    name: string
}
export function MaterialItem(props: MaterialItemProps) {
    const { name } = props
    return <div
        className='
        border-dashed
        border-[1px]
        border-[#000]
        py-[8px] px-[10px] 
        m-[10px]
        cursor-move
        inline-block
        bg-white
        hover:bg-[#ccc]
    '
    >
        {name}
    </div>
}