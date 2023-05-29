// 获取query参数
// import React from 'react';

// import { useSearchParams } from 'react-router-dom';

// export default function Detail() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   return (
//     <div>
//       Detail-{searchParams.get('id')}
//       <button
//         onClick={() => {
//           setSearchParams({ id: 1000 });
//         }}
//       >
//         猜你喜欢
//       </button>
//     </div>
//   );
// }

// 动态路由传参
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);
  return (
    <div>
      Detail-{params.id}
      <button
        onClick={() => {
          navigate('/detail/1000');
        }}
      >
        猜你喜欢
      </button>
    </div>
  );
}
