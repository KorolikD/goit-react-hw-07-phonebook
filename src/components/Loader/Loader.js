import { RotatingLines } from 'react-loader-spinner';
import { theme } from 'styles';

export const Loader = () => (
  <div
    style={{
      height: '10vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <RotatingLines
      strokeColor={theme.colors.gray}
      strokeWidth="5"
      animationDuration="0.75"
      width="40"
      visible={true}
    />
  </div>
);
