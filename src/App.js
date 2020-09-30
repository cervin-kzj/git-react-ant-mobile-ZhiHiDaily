import React from 'react';
// import './App.css';
import { Switch, Route, Redirect } from "react-router-dom"
import AsyncComponent from "./util/AsyncComponent"
const IndexComponent = AsyncComponent(
  () => {
    return import('./pages/Index')
  }
)
/**
 * 箭头函数简写
 */
const DetailComponent = AsyncComponent(
  () => import("./pages/Detail")
)
const CommentComponent = AsyncComponent(
  () => import("./pages/Comment")
)
const CollectionComponent = AsyncComponent(
  () => import("./pages/Collection")
)
function App() {
  return (
    <div className="wrap">
      <Switch>
        <Route path="/index" component={IndexComponent}></Route>
        <Route path="/detail/:id" component={DetailComponent}></Route>
        <Route path="/comment/:id" component={CommentComponent}></Route>
        <Route path="/collection" component={CollectionComponent}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
