
interface SnackbarProps {
  message?: string;
  type: 'success' | 'error';
  open: boolean;
}

export const Snackbar = (props: SnackbarProps) => {
  const type = props.type === 'success' ? 'bg-green-500' : 'bg-red-700';

  return (
    <div className={`absolute bottom-5 left-5 rounded text-white p-2 ${props.open ? "flex" : "hidden"} ${type}`}>
      {props.message}
    </div>
  )
}
