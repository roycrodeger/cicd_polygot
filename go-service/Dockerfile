# Stage 1: Build the Go binary
FROM golang:1.19-alpine AS builder
WORKDIR /app
COPY main.go .
# Build a statically-linked binary
RUN GO111MODULE=off CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Stage 2: Create the final, minimal image
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]