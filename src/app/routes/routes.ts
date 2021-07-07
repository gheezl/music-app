import {Routes} from "@angular/router"
import {HomeComponent} from "../pages/home/home.component"
import {ResultsComponent} from "../pages/results/results.component"

export const appRoutes:Routes =[
    {path: "", component: HomeComponent},
    {path: "Search-Results", component: ResultsComponent, data: history},
]