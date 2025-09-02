import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Button,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  message: string;
};

const styles = {
  body: {
    backgroundColor: "#fafafa",
    color: "#111827",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  container: {
    width: "600px",
    margin: "32px auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)",
  },
  heading: { margin: 0, fontSize: "20px", fontWeight: 600 },
  muted: { marginTop: "6px", fontSize: "14px", color: "#6b7280" },
  label: { fontWeight: 600 },
  messageTitle: { marginBottom: "8px", fontWeight: 600 },
  button: {
    display: "inline-block",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "12px 16px",
    borderRadius: "8px",
    textDecoration: "none",
  },
  smallMuted: { marginTop: "12px", fontSize: "12px", color: "#6b7280" },
};

export default function ContactMessageEmail({ name, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={{ marginBottom: "16px" }}>
            <Heading style={styles.heading}>New message from site</Heading>
            <Text style={styles.muted}>
              You received a new message from the contact form.
            </Text>
          </Section>

          <Section>
            <Text>
              <span style={styles.label}>Name:</span> {name}
            </Text>
            <Text>
              <span style={styles.label}>Email:</span> {email}
            </Text>
          </Section>

          <Section style={{ marginTop: "16px" }}>
            <Text style={styles.messageTitle}>Message:</Text>
            <Text style={{ whiteSpace: "pre-line" }}>{message}</Text>
          </Section>

          <Hr style={{ margin: "24px 0" }} />

          <Section>
            <Button
              href={`mailto:${email}?subject=Re:%20Your%20message%20on%20site`}
              style={styles.button}
            >
              Reply
            </Button>
            <Text style={styles.smallMuted}>
              Sent automatically by nicolassilva.pt. Please respond using the
              button above.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
