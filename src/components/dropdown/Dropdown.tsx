import { useRef, useState } from 'react';
import './dropdown.scss';

function Dropdown({title, text} : {title?: string, text: string[] | string}) {
    const [state, setState] = useState<number>(0);
    const data = Array.isArray(text) ? text : [text];

    const contentDiv = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setState(state === 0 ? contentDiv.current!.scrollHeight : 0);

    return <div className={`dropdown${state ? ' open' : ''}`}>
        <div className='bar'>
            <p>{title}</p>
            <button onClick={toggleDropdown}><img src='/assets/icons/arrow.svg' alt=''/></button>
        </div>
        <div className='content' ref={contentDiv} style={{maxHeight: state}}>
            <p>{data.join('\n')}</p>
        </div>
    </div>
}

export default Dropdown
