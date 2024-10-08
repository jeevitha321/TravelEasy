FROM eclipse-temurin:17-jdk-focal

# Set the working directory
WORKDIR /app

# Copy the .mvn directory (preserve the original directory structure)
COPY .mvn/ .mvn/

# Copy the Maven wrapper and the pom.xml
COPY mvnw pom.xml ./

# Ensure the mvnw script has execution permissions
RUN chmod +x mvnw

# Copy the source code
COPY src ./src

# Use the Maven wrapper to run the application
CMD ["./mvnw", "spring-boot:run"]
