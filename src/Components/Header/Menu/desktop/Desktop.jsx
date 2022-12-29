
const Desktop = ({data}) => {

  return (
    <ul>
      {
        data.map((item) => {

          if (!item.visible) {
            
          } else {
            return (

              <li key={item.id}>
                <a href={item.url}>
                  <p>{item.title}</p>
                </a>
              </li>
            
            )
          }

        })
      }
    </ul>
  );

}

export default Desktop;