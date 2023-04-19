type Props = {
    names: String[]
};

const MainInterests = ({names}: Props) => 
    <ul>
        {names.map((name, index) => <li key={index}>{name}</li>)}
    </ul>

export default MainInterests;
