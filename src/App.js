import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";

import CreateExpense from "./components/Home/create-expense.component";
import EditExpense from "./components/Home/edit-expense.component";
import ExpenseList from "./components/Home/expenses-listing.component";

import ArticleView from "./components/Article/view-article";
import ArticleForm from "./components/Article/form-article";
import ArticleEdit from "./components/Article/edit-article";

import Signup from "./components/Signup/SignUpPage";
import Signin from "./components/Signin/SignPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/QuizPage";
import ScrollTop from "./components/ScrollTop";
import Logout from "./components/Signin/Logout";

import ScrollRestoration from "./ScrollRestoration";

export default function App() {
  return (
    <Router>
      <ScrollRestoration>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Quiz" component={Quiz} />

        <Route path="/Form" component={CreateExpense} />
        <Route path="/Edit/:id" component={EditExpense} />
        <Route path="/List" component={ExpenseList} />

        <Route path="/view" component={ArticleView} />
        <Route path="/artform" component={ArticleForm} />
        <Route path="/editform" component={ArticleEdit} />

        <Route path="/sign-up" component={Signup}></Route>
        <Route path="/sign-in" component={Signin}></Route>
        <Route path="/Logout" component={Logout}></Route>

        <ScrollTop />
      </ScrollRestoration>
    </Router>
  );
}
