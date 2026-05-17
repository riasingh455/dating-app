import { Routes } from '@angular/router';
import { Home } from '../features/home/home.js';
import { MemberList } from '../features/members/member-list/member-list.js';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed.js';
import { Lists } from '../features/lists/lists.js';
import { Messages } from '../features/messages/messages.js';
import { authGuard } from '../core/guards/auth-guard.js';

export const routes: Routes = [
    {path: '', component: Home}, 
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
               {path: 'members', component: MemberList, canActivate: [authGuard]}, 
                {path: 'members/:id', component: MemberDetailed},
                {path: 'lists', component: Lists},
                {path: 'messages', component: Messages}
        ]
    },
    {path: '**', component: Home}

];
    