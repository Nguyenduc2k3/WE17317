import { render, router } from "../lib"
import BookUpdate from "./pages/admin/bookUpdate"
import Dashboard from "./pages/admin/dashboard"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import './style/main.css'

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(HomePage, app)
})

router.on('/products/:id', function({data}) {
    render(() => ProductPage(data.id), app)
})

router.on('/admin', function() {
    render(Dashboard, app)
})

router.on('/admin/book/:id', function({data}) {
    render(() => BookUpdate(data.id), app)
})

router.resolve()



