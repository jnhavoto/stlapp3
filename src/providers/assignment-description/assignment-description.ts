import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the AssignmentDescriptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssignmentDescriptionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AssignmentDescriptionProvider Provider');
  }

    /**
     *
     *Method to retrive all AssignmentDescription
     * @returns {Observable<any>}
     */
    getAllAssignmentsDescription() : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-descriptions';
        return this.http.get(url, {headers: headers});
    }


    /**
     *
     *Method to retrive the last AssignmentDescription
     * @returns {Observable<any>}
     */
    getLastAssignmentDescription() : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/last-assignment-descriptions';
        return this.http.get(url, {headers: headers}).map((resposta:any)=>resposta.json());
    }

    /**
     * Method to retrive a specific AssignmentDescription by id
     * @param id
     * @returns {Observable<any>}
     */
    getAssignmentDescription(id) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-description/'+id;
        return this.http.get(url, {headers: headers});
    }

    /**
     * Methods to store an AssignmentDescription
     * @param assignment
     * @returns {Observable<any>}
     */
    saveAssignmentDescription(assignmentDescription) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-description';
        return this.http.post(url,assignmentDescription, {headers: headers});
    }


    /**
     * Method to update a specific AssignmentDescription by id
     * @param {number} id
     * @param assignmentDescription
     * @returns {Observable<any>}
     */
    updateAssignmentDescription(id:number,assignmentDescription) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-description/'+id;
        return this.http.put(url,assignmentDescription, {headers: headers});
    }

    /**
     * Method to delete a specific AssignmentDescription by id
     * @param id
     * @returns {Observable<any>}
     */
    deleteAssignmentDescription(id) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-description/'+id;
        return this.http.delete(url, {headers: headers});
    }

}
