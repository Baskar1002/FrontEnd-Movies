import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

interface Movie {
  title: string;
  shortTitle: string;
  distributor: string;
  territory: string;
  primaryGenre: string;
  additionalGenre: string;
  director1: string;
  director2: string;
  cast1: string;
  cast2: string;
  synopsis: string;
}


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  selectedFile: File | null = null;
  movies: Movie[] | null = null;
  uploadedFileName: string | null = null;
  uploadErrorMessage: string | null = null;
  invalidExtension = false;
  errorMessage: string | null = null;


  constructor(private http: HttpClient) {}

  API = 'http://localhost:9897/api/movie';
  upload_API = 'http://localhost:9897/api/upload';

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http.get<Movie[]>(this.API).subscribe((data) => {
      console.log(data); 
      this.movies = data;
    });
  } 

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      const ext = file.name.split('.').pop();
      if (ext !== 'xlsx') {
        this.uploadErrorMessage = 'Only .xlsx files are allowed.';
        target.value = ''; // reset file input to clear selection
        return;
      }
      this.uploadErrorMessage = null; // reset the error message
      this.selectedFile = file;
      const fileName = this.generateFileName();
      this.uploadedFileName = fileName;
    }
  }

  generateFileName() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    return `movies_${month}-${day}-${year}.xlsx`;
  }

  saveFile() {
    if (this.selectedFile) {
      this.uploadFile();
      const processedFileName = this.generateFileName();
      saveAs(this.selectedFile, processedFileName);
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile as File);

      // Make a HTTP POST request to the backend API to upload the file
      this.http.post(this.upload_API, formData).subscribe(
        (response) => {
          console.log('File uploaded successfully!', response);
        },
        (error) => {
          console.error('Error uploading file!', error);
          this.uploadErrorMessage = `"Error occurred while uploading file" check the excel file which you uploaded:
          
          ${error.error}`;
        }
      );
    }
  }



}
