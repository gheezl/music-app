import {Routes} from "@angular/router"
import {HomeComponent} from "../pages/home/home.component"
import {ResultsComponent} from "../pages/results/results.component"
import { RedirectComponent } from "../components/redirect/redirect.component"

export const appRoutes:Routes =[
    {path: "", component: HomeComponent},
    {path: "Search-Results", component: ResultsComponent},
    {path: "Redirect", component: RedirectComponent }
]