package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from the Go Service!")
}

func statusHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprint(w, `{"service": "go-service", "status": "healthy"}`)
}

func main() {
	http.HandleFunc("/", handler)
    http.HandleFunc("/status", statusHandler)
	log.Println("Go service starting on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}