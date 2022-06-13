import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { HeroeModel } from '../../models/heroe.model';


@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {

	heroe = new HeroeModel();
	
	formulario : FormGroup;

	constructor( private fb : FormBuilder ) { 

		this.crearFormulario();

	}


	ngOnInit(): void {
	}

	crearFormulario(){

		this.formulario = this.fb.group({	
			id 		: [{value: this.heroe.id, disabled: true}],
			nombre	: [this.heroe.nombre, Validators.required],
			poder	: [this.heroe.poder],
			vivo	: [this.heroe.vivo],
		})

	}

	guardar(){
		this.heroe.nombre = this.formulario.controls['nombre'].value;
		this.heroe.poder = this.formulario.controls['poder'].value;
		this.heroe.vivo = this.formulario.controls['vivo'].value;
		console.clear();
		console.log(this.formulario);
		console.log(this.heroe);
		console.log('hola Soy el Formulario!!!!!! : ');
		console.log('id: ' + this.heroe.id);
		console.log('nombre: ' + this.heroe.nombre);
		console.log('poder: ' + this.heroe.poder);
		console.log('vivo: ' + this.heroe.vivo);

	}

}
