import { Route } from '@angular/router'
import { IndexComponent } from './dashboard/index/index.component'
import { AnalyticsComponent } from './dashboard/analytics/analytics.component'
import { ProjectsComponent } from './dashboard/projects/projects.component'
import { CrmComponent } from './dashboard/crm/crm.component'
import { WalletComponent } from './dashboard/wallet/wallet.component'
import { CalendarComponent } from './apps/calendar/calendar.component'
//import { ChatComponent } from './apps/chat/chat.component'
import CRMProjectsComponent from './crm/projects/projects.component'
import { OrdersListComponent } from './crm/orders-list/orders-list.component'
import { ClientsComponent } from './crm/clients/clients.component'
import { ManagementComponent } from './crm/management/management.component'
import { ProductsComponent } from './ecommerce/products/products.component'
import { ProductsDetailsComponent } from './ecommerce/products-details/products-details.component'
import { OrdersComponent } from './ecommerce/orders/orders.component'
import { OrdersDetailsComponent } from './ecommerce/orders-details/orders-details.component'
import { CustomersComponent } from './ecommerce/customers/customers.component'
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component'
import { CheckoutComponent } from './ecommerce/checkout/checkout.component'
import { SellersComponent } from './ecommerce/sellers/sellers.component'
import { InboxComponent } from './email/inbox/inbox.component'
import { ReadComponent } from './email/read/read.component'
import { ListComponent } from './projects/list/list.component'
import { DetailsComponent } from './projects/details/details.component'
import { GanttComponent } from './projects/gantt/gantt.component'
import { AddComponent } from './projects/add/add.component'
import { SocialFeedComponent } from './apps/social-feed/social-feed.component'
import { TasksComponent } from './tasks/tasks/tasks.component'
import { DetailsComponent as TaskDetailComponent } from './tasks/details/details.component'
import { KanbanComponent } from './tasks/kanban/kanban.component'
import { FileManagerComponent } from './apps/file-manager/file-manager.component'
import { ProfileComponent } from './extrapages/profile/profile.component'
import { Profile2Component } from './extrapages/profile-2/profile-2.component'
import { InvoiceComponent } from './extrapages/invoice/invoice.component'
import { FaqComponent } from './extrapages/faq/faq.component'
import { PricingComponent } from './extrapages/pricing/pricing.component'
import { StarterComponent } from './extrapages/starter/starter.component'
import { TimelineComponent } from './extrapages/timeline/timeline.component'
import { AccordionsComponent } from './ui/accordions/accordions.component'
import { AlertsComponent } from './ui/alerts/alerts.component'
import { AvatarsComponent } from './ui/avatars/avatars.component'
import { BadgesComponent } from './ui/badges/badges.component'
import { BreadcrumbComponent } from './ui/breadcrumb/breadcrumb.component'
import { ButtonsComponent } from './ui/buttons/buttons.component'
import { CardsComponent } from './ui/cards/cards.component'
import { CarouselComponent } from './ui/carousel/carousel.component'
import { DropdownsComponent } from './ui/dropdowns/dropdowns.component'
import { EmbedVideoComponent } from './ui/embed-video/embed-video.component'
import { GridComponent } from './ui/grid/grid.component'
import { ListGroupComponent } from './ui/list-group/list-group.component'
import { ModalsComponent } from './ui/modals/modals.component'
import { NotificationsComponent } from './ui/notifications/notifications.component'
import { OffcanvasComponent } from './ui/offcanvas/offcanvas.component'
import { PlaceholdersComponent } from './ui/placeholders/placeholders.component'
import { PaginationComponent } from './ui/pagination/pagination.component'
import { PopoversComponent } from './ui/popovers/popovers.component'
import { ProgressComponent } from './ui/progress/progress.component'
import { RibbonsComponent } from './ui/ribbons/ribbons.component'
import { SpinnersComponent } from './ui/spinners/spinners.component'
import { TabsComponent } from './ui/tabs/tabs.component'
import { TooltipsComponent } from './ui/tooltips/tooltips.component'
import { LinksComponent } from './ui/links/links.component'
import { TypographyComponent } from './ui/typography/typography.component'
import { UtilitiesComponent } from './ui/utilities/utilities.component'
import { DragulaComponent } from './extendedUI/dragula/dragula.component'
import { RangeSliderComponent } from './extendedUI/range-slider/range-slider.component'
import { RatingsComponent } from './extendedUI/ratings/ratings.component'
import { ScrollbarComponent } from './extendedUI/scrollbar/scrollbar.component'
import { ScrollspyComponent } from './extendedUI/scrollspy/scrollspy.component'
import { WidgetsComponent } from './apps/widgets/widgets.component'
import { RemixiconsComponent } from './icons/remix-icons/remix-icons.component'
import { MdiComponent } from './icons/mdi/mdi.component'
import { UniconsComponent } from './icons/unicons/unicons.component'
import { AreaComponent } from './charts/apex/area/area.component'
import { BarComponent } from './charts/apex/bar/bar.component'
import { BubbleComponent } from './charts/apex/bubble/bubble.component'
import { CandlestickComponent } from './charts/apex/candlestick/candlestick.component'
import { ColumnComponent } from './charts/apex/column/column.component'
import { HeatmapComponent } from './charts/apex/heatmap/heatmap.component'
import { LineComponent } from './charts/apex/line/line.component'
import { MixedComponent } from './charts/apex/mixed/mixed.component'
import { TimelineComponent as ApexTimelineComponent } from './charts/apex/timeline/timeline.component'
import { BoxplotComponent } from './charts/apex/boxplot/boxplot.component'
import { TreemapComponent } from './charts/apex/treemap/treemap.component'
import { PieComponent } from './charts/apex/pie/pie.component'
import { RadarComponent } from './charts/apex/radar/radar.component'
import { RadialbarComponent } from './charts/apex/radialbar/radialbar.component'
import { ScatterComponent } from './charts/apex/scatter/scatter.component'
import { PolarAreaComponent } from './charts/apex/polar-area/polar-area.component'
import { SparklinesComponent } from './charts/apex/sparklines/sparklines.component'
import { AreaComponent as ChartJsAreaComponent } from './charts/chartjs/area/area.component'
import { LineComponent as ChartJsLineComponent } from './charts/chartjs/line/line.component'
import { BarComponent as ChartJsBarComponent } from './charts/chartjs/bar/bar.component'
import { OtherComponent } from './charts/chartjs/other/other.component'
import { AdvancedComponent } from './forms/advanced/advanced.component'
import { ValidationComponent } from './forms/validation/validation.component'
import { WizardComponent } from './forms/wizard/wizard.component'
import { FileuploadsComponent } from './forms/file-uploads/file-uploads.component'
import { EditorsComponent } from './forms/editors/editors.component'
import { BasicComponent } from './tables/basic/basic.component'
import { DatatableComponent } from './tables/datatable/datatable.component'
import { VectorComponent } from './maps/vector/vector.component'
import { GoogleComponent } from './maps/google/google.component'
import { Alt404Component } from './extrapages/alt-404/alt-404.component'
import { ElementsComponent } from './forms/elements/elements.component'
import { PreloaderComponent } from './extrapages/preloader/preloader.component'
import { LucideComponent } from './icons/lucide/lucide.component'
import { DashboardComponent } from './dashboard/home/home.component'
import { EarningsCalendarComponent } from '../components/earnings-calendar/earnings-calendar.component'
import { RealTimeStockPricesComponent } from '../components/real-time-stock-prices/real-time-stock-prices.component'
import { MarketSentimentComponent } from '../components/news-sentiment-analysis/news-sentiment-analysis.component'
import { WatchlistAlertsComponent } from '../components/watchlist-alerts/watchlist-alerts.component'
import { LoginComponent } from '../account/login/login.component'
import { RegistrationComponent } from '../components/registration/registration.component'
import { ChatComponent } from '../components/chat/chat.component'


export const PAGE_ROUTES: Route[] = [
  // Dashboard
  //{ path: '', component: IndexComponent, data: { title: 'Dashboard' } },
  {
    path: 'dashboard-analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics' },
  },
  {
    path: 'earnings-calendar',
    component: EarningsCalendarComponent,
    data: {title : 'Earnings Calendar'},
  },
  {
    path: 'real-time-stocks-prices',
    component: RealTimeStockPricesComponent,
    data: {title: 'Real Time Stocks Prices'},
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: {title: 'The Insider Trade Chat'},
  },
  {
    path: 'market-sentiment-analysis',
    component: MarketSentimentComponent,
    data: {title: 'Market Sentiment Analysis'},
  },
  {
    path: 'watchlist-alerts',
    component: WatchlistAlertsComponent,
    data: {title: 'Watchlist'},
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'},
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {title: 'Registration'},
  },

  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },{
    path: 'dashboard-projects',
    component: ProjectsComponent,
    data: { title: 'Project' },
  },
  { path: 'dashboard-crm', component: CrmComponent, data: { title: 'CRM' } },
  {
    path: 'dashboard-wallet',
    component: WalletComponent,
    data: { title: 'E-Wallet' },
  },

  // Apps
  {
    path: 'apps-calendar',
    component: CalendarComponent,
    data: { title: 'Calendar' },
  },
  
  {
    path: 'crm-projects',
    component: CRMProjectsComponent,
    data: { title: 'CRM Projects' },
  },
  {
    path: 'crm-orders-list',
    component: OrdersListComponent,
    data: { title: 'Orders List' },
  },
  {
    path: 'crm-clients',
    component: ClientsComponent,
    data: { title: 'Clients List' },
  },
  {
    path: 'crm-management',
    component: ManagementComponent,
    data: { title: 'Management' },
  },
  {
    path: 'apps-ecommerce-products',
    component: ProductsComponent,
    data: { title: 'Products' },
  },
  {
    path: 'apps-ecommerce-products-details',
    component: ProductsDetailsComponent,
    data: { title: 'Product Details' },
  },
  {
    path: 'apps-ecommerce-orders',
    component: OrdersComponent,
    data: { title: 'Orders' },
  },
  {
    path: 'apps-ecommerce-orders-details',
    component: OrdersDetailsComponent,
    data: { title: 'Order Details' },
  },
  {
    path: 'apps-ecommerce-customers',
    component: CustomersComponent,
    data: { title: 'Customers' },
  },
  {
    path: 'apps-ecommerce-shopping-cart',
    component: ShoppingCartComponent,
    data: { title: 'Shopping Cart' },
  },
  {
    path: 'apps-ecommerce-checkout',
    component: CheckoutComponent,
    data: { title: 'Checkout' },
  },
  {
    path: 'apps-ecommerce-sellers',
    component: SellersComponent,
    data: { title: 'Sellers' },
  },
  {
    path: 'apps-email-inbox',
    component: InboxComponent,
    data: { title: 'Inbox' },
  },
  {
    path: 'apps-email-read',
    component: ReadComponent,
    data: { title: 'Email Read' },
  },
  {
    path: 'apps-projects-list',
    component: ListComponent,
    data: { title: 'Projects' },
  },
  {
    path: 'apps-projects-details',
    component: DetailsComponent,
    data: { title: 'Project Overview' },
  },
  {
    path: 'apps-projects-gantt',
    component: GanttComponent,
    data: { title: 'Projects Calendar' },
  },
  {
    path: 'apps-projects-add',
    component: AddComponent,
    data: { title: 'Create Project' },
  },
  {
    path: 'apps-social-feed',
    component: SocialFeedComponent,
    data: { title: 'Social Feed' },
  },
  { path: 'apps-tasks', component: TasksComponent, data: { title: 'Tasks' } },
  {
    path: 'apps-tasks-details',
    component: TaskDetailComponent,
    data: { title: 'Task Detail' },
  },
  {
    path: 'apps-tasks-kanban',
    component: KanbanComponent,
    data: { title: 'Kanban Board' },
  },
  {
    path: 'apps-file-manager',
    component: FileManagerComponent,
    data: { title: 'File Manager' },
  },

  // Custom
  {
    path: 'pages-profile',
    component: ProfileComponent,
    data: { title: 'Profile' },
  },
  {
    path: 'pages-profile-2',
    component: Profile2Component,
    data: { title: 'Profile' },
  },
  {
    path: 'pages-invoice',
    component: InvoiceComponent,
    data: { title: 'Invoice' },
  },
  { path: 'pages-faq', component: FaqComponent, data: { title: 'FAQ' } },
  {
    path: 'pages-pricing',
    component: PricingComponent,
    data: { title: 'Pricing' },
  },
  {
    path: 'pages-starter',
    component: StarterComponent,
    data: { title: 'Starter Page' },
  },
  {
    path: 'pages-preloader',
    component: PreloaderComponent,
    data: { title: 'Preloader' },
  },
  {
    path: 'pages-timeline',
    component: TimelineComponent,
    data: { title: 'Timeline' },
  },
  {
    path: 'pages-404-alt',
    component: Alt404Component,
    data: { title: 'Error 404' },
  },

  // Component
  {
    path: 'ui-accordions',
    component: AccordionsComponent,
    data: { title: 'Accordions' },
  },
  { path: 'ui-alerts', component: AlertsComponent, data: { title: 'Alerts' } },
  {
    path: 'ui-avatars',
    component: AvatarsComponent,
    data: { title: 'Avatars' },
  },
  { path: 'ui-badges', component: BadgesComponent, data: { title: 'Badges' } },
  {
    path: 'ui-breadcrumb',
    component: BreadcrumbComponent,
    data: { title: 'Breadcrumb' },
  },
  {
    path: 'ui-buttons',
    component: ButtonsComponent,
    data: { title: 'Buttons' },
  },
  { path: 'ui-cards', component: CardsComponent, data: { title: 'Cards' } },
  {
    path: 'ui-carousel',
    component: CarouselComponent,
    data: { title: 'Carousel' },
  },
  {
    path: 'ui-dropdowns',
    component: DropdownsComponent,
    data: { title: 'Dropdowns' },
  },
  {
    path: 'ui-embed-video',
    component: EmbedVideoComponent,
    data: { title: 'Embed Video' },
  },
  { path: 'ui-grid', component: GridComponent, data: { title: 'Grid System' } },
  {
    path: 'ui-list-group',
    component: ListGroupComponent,
    data: { title: 'List Group' },
  },
  { path: 'ui-modals', component: ModalsComponent, data: { title: 'Modals' } },
  {
    path: 'ui-notifications',
    component: NotificationsComponent,
    data: { title: 'Notifications' },
  },
  {
    path: 'ui-offcanvas',
    component: OffcanvasComponent,
    data: { title: 'Offcanvas' },
  },
  {
    path: 'ui-placeholders',
    component: PlaceholdersComponent,
    data: { title: 'Placeholders' },
  },
  {
    path: 'ui-pagination',
    component: PaginationComponent,
    data: { title: 'Pagination' },
  },
  {
    path: 'ui-popovers',
    component: PopoversComponent,
    data: { title: 'Popovers' },
  },
  {
    path: 'ui-progress',
    component: ProgressComponent,
    data: { title: 'Progress' },
  },
  {
    path: 'ui-ribbons',
    component: RibbonsComponent,
    data: { title: 'Ribbons' },
  },
  {
    path: 'ui-spinners',
    component: SpinnersComponent,
    data: { title: 'Spinners' },
  },
  { path: 'ui-tabs', component: TabsComponent, data: { title: 'Tabs' } },
  {
    path: 'ui-tooltips',
    component: TooltipsComponent,
    data: { title: 'Tooltips' },
  },
  { path: 'ui-links', component: LinksComponent, data: { title: 'Links' } },
  {
    path: 'ui-typography',
    component: TypographyComponent,
    data: { title: 'Typography' },
  },
  {
    path: 'ui-utilities',
    component: UtilitiesComponent,
    data: { title: 'Utilities' },
  },

  // Extended UI
  {
    path: 'extended-dragula',
    component: DragulaComponent,
    data: { title: 'Dragula' },
  },
  {
    path: 'extended-range-slider',
    component: RangeSliderComponent,
    data: { title: 'Range Slider' },
  },
  {
    path: 'extended-ratings',
    component: RatingsComponent,
    data: { title: 'Ratings' },
  },
  {
    path: 'extended-scrollbar',
    component: ScrollbarComponent,
    data: { title: 'Scrollbar' },
  },
  {
    path: 'extended-scrollspy',
    component: ScrollspyComponent,
    data: { title: 'Scrollspy' },
  },

  { path: 'widgets', component: WidgetsComponent, data: { title: 'Widgets' } },

  // icons
  {
    path: 'icons-remixicons',
    component: RemixiconsComponent,
    data: { title: 'Remix Icons' },
  },
  {
    path: 'icons-mdi',
    component: MdiComponent,
    data: { title: 'Material Design Icons' },
  },
  {
    path: 'icons-unicons',
    component: UniconsComponent,
    data: { title: 'Unicons' },
  },
  {
    path: 'icons-lucide',
    component: LucideComponent,
    data: { title: 'Lucide' },
  },

  // Chart
  {
    path: 'charts-apex-area',
    component: AreaComponent,
    data: { title: 'Apex Area Chart' },
  },
  {
    path: 'charts-apex-bar',
    component: BarComponent,
    data: { title: 'Apex Bar Chart' },
  },
  {
    path: 'charts-apex-bubble',
    component: BubbleComponent,
    data: { title: 'Apex Bubble Chart' },
  },
  {
    path: 'charts-apex-candlestick',
    component: CandlestickComponent,
    data: { title: 'Apex Candlestick Chart' },
  },
  {
    path: 'charts-apex-column',
    component: ColumnComponent,
    data: { title: 'Apex Column Chart' },
  },
  {
    path: 'charts-apex-heatmap',
    component: HeatmapComponent,
    data: { title: 'Apex Heatmap Chart' },
  },
  {
    path: 'charts-apex-line',
    component: LineComponent,
    data: { title: 'Apex Line Chart' },
  },
  {
    path: 'charts-apex-mixed',
    component: MixedComponent,
    data: { title: 'Apex Mixed Chart' },
  },
  {
    path: 'charts-apex-timeline',
    component: ApexTimelineComponent,
    data: { title: 'Apex Timeline Chart' },
  },
  {
    path: 'charts-apex-boxplot',
    component: BoxplotComponent,
    data: { title: 'Apex Boxplot Chart' },
  },
  {
    path: 'charts-apex-treemap',
    component: TreemapComponent,
    data: { title: 'Apex Treemap Chart' },
  },
  {
    path: 'charts-apex-pie',
    component: PieComponent,
    data: { title: 'Apex Pie Chart' },
  },
  {
    path: 'charts-apex-radar',
    component: RadarComponent,
    data: { title: 'Apex Radar Chart' },
  },
  {
    path: 'charts-apex-radialbar',
    component: RadialbarComponent,
    data: { title: 'Apex RadialBar Chart' },
  },
  {
    path: 'charts-apex-scatter',
    component: ScatterComponent,
    data: { title: 'Apex Scatter Chart' },
  },
  {
    path: 'charts-apex-polar',
    component: PolarAreaComponent,
    data: { title: 'Apex Polar Area Chart' },
  },
  {
    path: 'charts-apex-sparklines',
    component: SparklinesComponent,
    data: { title: 'Apex Sparklines Chart' },
  },
  {
    path: 'charts-chartjs-area',
    component: ChartJsAreaComponent,
    data: { title: 'Chartjs' },
  },
  {
    path: 'charts-chartjs-bar',
    component: ChartJsBarComponent,
    data: { title: 'Chartjs' },
  },
  {
    path: 'charts-chartjs-line',
    component: ChartJsLineComponent,
    data: { title: 'Chartjs' },
  },
  {
    path: 'charts-chartjs-other',
    component: OtherComponent,
    data: { title: 'Chartjs' },
  },

  // Forms
  {
    path: 'form-elements',
    component: ElementsComponent,
    data: { title: 'Form Elements' },
  },
  {
    path: 'form-advanced',
    component: AdvancedComponent,
    data: { title: 'Form Advanced' },
  },
  {
    path: 'form-validation',
    component: ValidationComponent,
    data: { title: 'Form Validation' },
  },
  {
    path: 'form-wizard',
    component: WizardComponent,
    data: { title: 'Form Wizard' },
  },
  {
    path: 'form-fileuploads',
    component: FileuploadsComponent,
    data: { title: 'File Uploads' },
  },
  {
    path: 'form-editors',
    component: EditorsComponent,
    data: { title: 'Editors' },
  },

  // Tables
  {
    path: 'tables-basic',
    component: BasicComponent,
    data: { title: 'Basic Tables' },
  },
  {
    path: 'tables-datatable',
    component: DatatableComponent,
    data: { title: 'Datatables' },
  },

  // Maps
  {
    path: 'maps-google',
    component: GoogleComponent,
    data: { title: 'Google Maps' },
  },
  {
    path: 'maps-vector',
    component: VectorComponent,
    data: { title: 'Vector Maps' },
  },
]
