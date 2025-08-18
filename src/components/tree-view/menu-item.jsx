import MenuList from "./menu-list"

export default function MenuItem({ item }) {
    return (
        <>
            <li>{item.label}</li>
            {console.log(item.label)}
            {
                item && item.children && item.children.length > 0 ? (
                    <MenuList list={item.children} />
                ) : null
            }
        </>
    )
}