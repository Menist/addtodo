//файл Reducers предназначен для обработки actions.
//initialState пустой массив. Это место для хранения всех задач в списке.
const initialState = {
  data: [],
};
const todos = (state = initialState, action) => {
  //функция todos- чистая (не модифицирует данные) ф-я, которая берёт предыдущее состояние и action, возвращает новое состояние
  // добавляем конструкцию switch case и определяем какой action сработал
  //в зависимости от action вызывается действие
  // создаём новый state и возвращаем его
  //todos-  массив с объектом message и id
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,//спред оператором делаю копию нового массива
        data: [
          ...state.data,
          {
            message:action.message,
            id:action.id,
          },
        ],
      };
    case 'DELETE_TODO':
      //возвращаем несовпадения id
      const todos =state.data.filter((todo)=> todo.id !==action.id);
      return {
        ...state,// возвращаю копию state с помощью spread оператора
        data: todos,
      };
    default:
      return state;
  }
}
export default todos;