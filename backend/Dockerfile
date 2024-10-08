FROM eclipse-temurin:17-jdk-focal

# Set the working directory
WORKDIR /app

# Copy the Maven wrapper and the pom.xml
COPY mvnw pom.xml ./

# Ensure the mvnw script has execution permissions
RUN chmod +x mvnw

# Copy the .mvn directory (preserve the original directory structure)
COPY .mvn/ .mvn/

# Download dependencies, this step will be cached unless pom.xml changes
RUN ./mvnw dependency:resolve

# Copy the source code
COPY src ./src

# Package the application (optional, for build purposes)
#RUN ./mvnw package

EXPOSE 8080

# Use the Maven wrapper to run the application
CMD ["./mvnw", "spring-boot:run"]
