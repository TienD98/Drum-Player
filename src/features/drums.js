import DisplayName from '../components/drum display/displayPad';
import DrumPadDisplay from '../components/drumPadDisplay';
import { useEffect } from 'react';
import { AUDIOS } from '../assets/audioAssets';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchData } from './drumSlice';

function Drum() {

    const stateData = useSelector((state) => state.drum.name);
    const dispatch = useDispatch();

    useEffect(() => {
        const key = "qweasdzxc";
        const handleKeyDown = (event) => {
            if (key.includes(event.key)) {
                const element = event.key.toUpperCase();
                document.getElementById(element).lastElementChild.play();
                document.getElementById(element).style.background = "blue";
            }
            for (const item of AUDIOS) {
                if (item.id === event.key.toUpperCase()) {
                    dispatch(fetchData(item.name));
                    break;
                }
            }
        };
        const handleup = (event) => {
            for (const item of AUDIOS) {
                if (item.id === event.key.toUpperCase()) {
                    dispatch(fetchData(item.name));
                    break;
                }
            }
            if (key.includes(event.key)) {
                const element = event.key.toUpperCase();
                document.getElementById(element).style.background = "white";
                document.getElementById(element).style = "blue"
            }
        }
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleup);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleup);
        };
      },
      // eslint-disable-next-line 
      []);
    
    const handleOnclick = (event) => {
        for (const item of AUDIOS) {
            if (item.id === event.currentTarget.id) {
                dispatch(fetchData(item.name));
                break;
            }
        }
        const vars = event.currentTarget.lastElementChild;
        vars.play();
    }

    return(
        <div id="drum-machine">
            <br />
            <div className="row align-items-center">
                <div className='col-6'>
                    <div className='card bg-info-subtle'>
                        <div className='card-body'>
                            <DrumPadDisplay onclick={handleOnclick} />
                        </div>
                    </div>
                </div>
                <div className='col-1'>
                </div>
                <div className='col-4'>
                    <DisplayName name={stateData}/>
                </div>
                <div className='col-1'>
                </div>
            </div>
        </div>
    );
}

export default Drum;