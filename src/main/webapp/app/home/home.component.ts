import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import { AuthServerProvider } from '../core/auth/auth-jwt.service';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    stompClient: Stomp.Client = null;

    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private authServerProvider: AuthServerProvider
    ) {}

    ngOnInit() {
        this.accountService.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.stompConnect();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.accountService.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    setConnected(connected) {
        console.log('Stomp Connected: ' + connected);
    }

    stompConnect() {
        const authToken = this.authServerProvider.getToken();
        const socket = new SockJS('//localhost:9000/gs-guide-websocket?access_token=' + authToken);
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect(
            {},
            frame => {
                this.setConnected(true);
                console.log('Connected: ' + frame);
                this.stompClient.subscribe('/topic/greetings', greeting => {
                    console.log(JSON.parse(greeting.body).content);
                });
            }
        );

        setTimeout(() => {
            this.stompClient.send('/hello', JSON.stringify({ name: 'prova' }), {});
        }, 5000);
    }

    stopmDisconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
    }
}
