import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
/*
  Generated class for the AssignmentSubmissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssignmentSubmissionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AssignmentSubmissionProvider Provider');
  }

    /**
     *
     *Method to retrive all AssignmentSubmissions
     * @returns {Observable<any>}
     */
    getAllAssignmentSubmissions() : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-submissions';
        return this.http.get(url, {headers: headers});
    }

    //
    // /**
    //  *
    //  *Method to retrive the last AssignmentSubmissions
    //  * @returns {Observable<any>}
    //  */
    // getLastAssignmentSubmissions() : Observable<any>{
    //     const  headers = new HttpHeaders({'Content-Type': 'application/json'})
    //     let url = 'http://127.0.0.1:8000/api/last-assignment-descriptions';
    //     return this.http.get(url, {headers: headers});
    // }

    /**
     * Method to retrive a specific AssignmentSubmissions by id
     * @param id
     * @returns {Observable<any>}
     */
    getAssignmentSubmissions(id) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-submission/'+id;
        return this.http.get(url, {headers: headers});
    }

    /**
     * Methods to store an AssignmentSubmissions
     * @param assignmentSubmissions
     * @returns {Observable<any>}
     */
    saveAssignmentSubmissions(assignmentSubmissions) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-submission';
        return this.http.post(url,assignmentSubmissions, {headers: headers});
    }


    /**
     * Method to update a specific AssignmentDescription by id
     * @param {number} id
     * @param assignmentSubmissions
     * @returns {Observable<any>}
     */
    updateAssignment(id:number,assignmentSubmissions) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-submission/'+id;
        return this.http.put(url,assignmentSubmissions, {headers: headers});
    }

    /**
     * Method to delete a specific AssignmentDescription by id
     * @param id
     * @returns {Observable<any>}
     */
    deleteAssignment(id) : Observable<any>{
        const  headers = new HttpHeaders({'Content-Type': 'application/json'})
        let url = 'http://127.0.0.1:8000/api/assignment-submission/'+id;
        return this.http.delete(url, {headers: headers});
    }

}
