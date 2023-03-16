import { render, screen } from "@testing-library/vue";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const job = {
    id: 1,
    title: "Software Engineer",
    organization: "Acme Corp",
    locations: ["San Francisco, CA", "New York, NY"],
    minimumQualifications: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
    ],
  };

  it("renders the job title", () => {
    render(JobListing, {
      props: {
        job,
      },
    });

    expect(screen.getByText(job.title)).toBeInTheDocument();
  });

  it("renders the job organization", () => {
    render(JobListing, {
      props: {
        job,
      },
    });

    expect(screen.getByText(job.organization)).toBeInTheDocument();
  });

  it("renders the job locations", () => {
    render(JobListing, {
      props: {
        job,
      },
    });

    job.locations.forEach((location) => {
      expect(screen.getByText(location)).toBeInTheDocument();
    });
  });

  it("renders the job qualifications", () => {
    render(JobListing, {
      props: {
        job,
      },
    });

    job.minimumQualifications.forEach((qualification) => {
      expect(screen.getByText(qualification)).toBeInTheDocument();
    });
  });
});
