import {Routes} from "@angular/router"
import {HomeComponent} from "../pages/home/home.component"
import {ResultsComponent} from "../pages/results/results.component"
import { RedirectComponent } from "../pages/redirect/redirect.component"
import { ListenedComponent } from "../pages/listened/listened.component"
import { RecommendedComponent } from "../components/recommended/recommended.component"

export const appRoutes:Routes =[
    {path: "", component: HomeComponent},
    {path: "Search-Results", component: ResultsComponent},
    {path: "Redirect", component: RedirectComponent},
    {path: "Listened", component: ListenedComponent},
    {path: "Recommended", component: RecommendedComponent}
]