import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../components/modal/modal.service';
import { Error } from '../../domain/error';

@Injectable()
export class ErrorHandlerService {
	error: Error = new Error();

	constructor(private router: Router, private modalService: ModalService) { }

	execute() {
		if (this.error.simpleClassName === 'ValidationException') {
			return this.executeValidationException();
		}

		if (this.error.simpleClassName === 'UnauthorizedException') {
			return this.executeUnauthorizedException();
		}

		if (this.error.simpleClassName === 'ForbiddenException') {
			return this.executeForbiddenException();
		}

		return this.executeInternalServerError();
	}

	executeValidationException() {
		this.modalService.open('modal-error');
	}

	executeUnauthorizedException() {
		return this.router.navigate(['/erro/401']);
	}

	executeForbiddenException() {
		return this.router.navigate(['/erro/403']);
	}

	executeInternalServerError() {
		return this.router.navigate(['/erro/500']);
	}
}
