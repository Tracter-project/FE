import NewInput from '../components/NewInput/NewInput';
import TestButton from '../components/TestButton/TestButton';
import TestScore from '../components/TestScore/TestScore';
import TestSelectButton from '../components/TestSelectButton/TestSelectButton';
import EditedInput from '../components/EditedInput/EditedInput';
import TestProgress from '../components/TestProgress/TestProgress';

export default function Ho() {
    return (
        <>
            <TestScore />
            <TestSelectButton />
            <TestButton />
            {/* <ToggleCheckBox /> */}
            <NewInput />
            <EditedInput />
            <TestProgress />
        </>
    );
}
