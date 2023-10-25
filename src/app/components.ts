import { ArticleOverviewComponent } from "./component/article-overview/article-overview.component"
import { FeatureComponent } from "./component/feature/feature.component"
import { GridComponent } from "./component/grid/grid.component"
import { PageComponent } from "./component/page/page.component"
import { TeaserComponent } from "./component/teaser/teaser.component"


let Components = {
    'page': PageComponent,
    'teaser': TeaserComponent,
    'grid': GridComponent,
    'feature': FeatureComponent,
    'ariticles': ArticleOverviewComponent
}

export { Components }