import { Component } from '@angular/core';

@Component({
    selector:'staff',
    template:`
    <div class="main">
		<div class="main-left">
			<h1>
				<span style="color:rgb(164,74,140)">s</span>c
			</h1>
			<div class="list">
				<div class="ultitle" style="cursor: pointer;" routerLink='/staff/department'>部门</div>
				<div class="ultitle" style="cursor: pointer;" routerLink='/staff/staff'>员工</div>
			</div>
			<div class="footer">欢迎使用</div>
		</div>
		<div class="main-right" >
			<router-outlet></router-outlet>
		</div>
    </div>
    `
})

export class staffComponent {

}