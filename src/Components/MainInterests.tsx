type Props = {
    names: String[]
};

const MainInterests = ({names}: Props) => {
    return (
        <ul>
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
    );
};  

export default MainInterests;
