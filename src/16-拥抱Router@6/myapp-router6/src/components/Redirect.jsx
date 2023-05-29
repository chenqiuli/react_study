import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// v6版本没有Redirect组件，自己封装一个
export default function Redirect(props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(props.to, { replace: true });
  }, [navigate, props.to]);

  return null;
}
