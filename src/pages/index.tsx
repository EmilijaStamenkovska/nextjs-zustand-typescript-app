// Store
import { useStore } from '../../store/store';
// Hooks
import { useGetFromStore } from '../../hooks/zustandHooks';
// Mui
import {
    Stack,
    IconButton,
} from '@mui/material';
// Icons
import IncreaseIcon from '@mui/icons-material/AddBox';
import DecreaseIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
    const [increase, decrease, removeAll] = useStore((state) => [state.increase, state.decrease, state.removeAll]);

    const cookies = useGetFromStore(useStore, (state) => state.cookies);

    return (
        <Stack direction='column' alignItems='center'>
            <div>🍪: {cookies}</div>
            <Stack alignItems='center' direction='row'>
                <IconButton onClick={removeAll}><DeleteIcon /></IconButton>
                <IconButton onClick={decrease}><DecreaseIcon /></IconButton>
                <IconButton onClick={increase} disableRipple><IncreaseIcon /></IconButton>
            </Stack>
        </Stack>
    )
}
