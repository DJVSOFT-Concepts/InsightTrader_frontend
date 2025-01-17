import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core'
import { MENU } from '../shared/menu-meta'
import { SimplebarAngularModule } from 'simplebar-angular'
import { MenuItem } from '../shared/models/menu.model'
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router'
import {
  NgbCollapse,
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { findAllParent, findMenuItem } from '../shared/helper/utils'
import { GroupChatService } from '@/app/services/group-chat.service'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SimplebarAngularModule,
    RouterModule,
    NgbCollapseModule,
    CommonModule,
    TranslateModule,
    NgbTooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[] = []
  activeMenuItems: string[] = []
  render = inject(Renderer2)
  chatGroups: any[] = []

  constructor(
    router: Router,
    public translate: TranslateService,
    private groupChatService: GroupChatService
  ) {
    translate.setDefaultLang('en')

    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenu()
        this.hideBackdrop()
      }
    })
  }

  ngOnInit(): void {
    this.initMenu()
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenu()
    })
  }

  /**
   * initialize menuitems
   */
  private loadChatGroups(): void {
    this.groupChatService.getAllGroupChats().subscribe(
      (data) => {
        this.chatGroups = data
        console.log('Chat Groups:', this.chatGroups)
      },
      (error) => {
        console.error('Error loading chat groups:', error)
      }
    )
  }
  initMenu(): void {
    this.menuItems = MENU // Initialize with existing menu items

    this.groupChatService.getAllGroupChats().subscribe(
      (groupChats: any[]) => {
        const subMenus = groupChats.map((group) => ({
          key: `chat-${group._id}`,
          label: group.name,
          link: `/chat/${group._id}`,
          parentKey: 'apps-chat',
        }))

        const chatMenu: MenuItem = {
          key: 'apps-chat',
          icon: 'uil-comments-alt',
          label: 'Chat',
          link: '/chat',
          collapsed: true,
          subMenu: subMenus,
        }

        // Add the chat menu item to the menu
        this.menuItems.push(chatMenu)
        console.log('Updated Menu Items:', this.menuItems) // For debugging
      },
      (error) => {
        console.error('Error fetching group chats:', error)
      }
    )
  }

  _activateMenu(): void {
    const div = document.querySelector('.side-nav')
    let matchingMenuItem = null

    if (div) {
      let items: HTMLCollectionOf<HTMLAnchorElement> =
        div.getElementsByClassName(
          'side-nav-link-ref'
        ) as HTMLCollectionOf<HTMLAnchorElement>

      for (let i = 0; i < items.length; ++i) {
        if (window.location.pathname === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key')
        const activeMt = findMenuItem(this.menuItems, mid!)
        if (activeMt) {
          const matchingObjs = [
            activeMt['key']!,
            ...findAllParent(this.menuItems, activeMt),
          ]

          this.activeMenuItems = matchingObjs
          this.menuItems.forEach((menu: MenuItem) => {
            menu.collapsed = !matchingObjs.includes(menu.key!)
          })
        }
      }
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasSubmenu(menu: MenuItem): boolean {
    return menu.subMenu ? true : false
  }

  /**
   * toggles open menu
   * @param menuItem clicked menuitem
   * @param collapse collpase instance
   */
  toggleMenuItem(menuItem: MenuItem, collapse: NgbCollapse): void {
    collapse.toggle()
    let openMenuItems: string[]
    if (!menuItem.collapsed) {
      openMenuItems = [
        menuItem['key']!,
        ...findAllParent(this.menuItems, menuItem),
      ]
      this.menuItems.forEach((menu: MenuItem) => {
        if (!openMenuItems.includes(menu.key!)) {
          menu.collapsed = true
        }
      })
    }
  }

  // Hide Backdrop
  hideBackdrop() {
    document.getElementById('custom-backdrop')?.classList.add('d-none')
    document.documentElement.classList.toggle('sidebar-enable')
  }
}
