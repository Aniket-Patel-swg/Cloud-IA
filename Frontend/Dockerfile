# Use Node.js base image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to work directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
