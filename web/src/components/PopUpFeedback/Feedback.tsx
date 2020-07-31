import React, { useState } from "react";
import {
  PageLayout,
  PageLayoutContent,
  PageLayoutSidebar,
  Card,
  Button,
  Header,
  Text,
  Spacer,
  TextArea,
  Grid,
  GridItem,
  Pill,
  Facepile,
  Flex,
} from "@kazoohr/confetti";
import { Rating } from "@material-ui/lab";
// import { useToast } from "@kazoohr/confetti";
import { useRateSomeoneMutation, useSnoozeFeedbackMutation } from "../../graphql/hooks";

export interface PopUpFeedbackProps {
  id: string;
  action: string;
  subject: {
    id: string;
    name: string;
    image160?: string;
    image30?: string;
    image70?: string;
    initials: string;
  };
  question: string;
  value: string;

  // comment?: string;
  // rating: number;
  // snoozeCount: number;
}
export function PopUpFeedback({ feedback }: { feedback: PopUpFeedbackProps }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(2.5);
  // const { error: showErrorToast, success: showSuccessToast } = useToast();

  const [snoozeFeedback] = useSnoozeFeedbackMutation({
    variables: { input: feedback.id },
    onCompleted: () => {
      console.log(`We'll remind you to rate ${feedback.subject.name} later!`);
    },
    onError: () => {
      console.log("Error snoozing");
    },
  });

  const [rateSomeone] = useRateSomeoneMutation({
    variables: {
      input: {
        requestId: feedback.id,
        rating: rating,
        comment: comment
      }},
    onCompleted: () => {
      console.log(`Thanks for rating ${feedback.subject.name}!`);
    },
    onError: () => {
      console.log("Error snoozing");
    }
  });

  return (
    <PageLayout>
      <PageLayoutContent>
        <Card style={{ textAlign: "center", borderRadius: "10px" }}>
          <GridItem xl={24}>
            <Spacer size="medium" orientation="vertical" />
            <Header level="3" size="h5">
              {feedback.action}
            </Header>
            <Spacer size="medium" orientation="vertical" />
            <Flex justifyContent="space-around">
              <Flex>
                <Facepile users={[feedback.subject]} max={1} />
                <Spacer size="small" orientation="horizontal" />
                <Header level="1" size="h2">
                  {feedback.subject.name}
                </Header>
              </Flex>
            </Flex>
            <Spacer size="medium" orientation="vertical" />
          </GridItem>
          <GridItem xl={24}>
            <Header level="3" size="h3">
              {feedback.question} <b>{feedback.value}</b>
              {"?"}
            </Header>
            <Spacer size="large" orientation="vertical" />
          </GridItem>
          <GridItem xl={24}>
            <Rating
              style={{ fontSize: "64px", color: "#2A5CDB" }}
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              size="large"
              onChangeActive={(_event, value) => setRating(value)}
            />
            <Grid>
              <Spacer size="large" orientation="horizontal" />
              <Spacer size="small" orientation="horizontal" />
              <GridItem width={6}>
                <span style={{ color: "#666666" }}>
                  <Pill
                    avatarUser={null}
                    icon={undefined}
                    onClick={null}
                    onClose={null}
                    size="small"
                    text="could use work"
                    variant="primary"
                  />
                </span>
              </GridItem>
              <Spacer size="large" orientation="horizontal" />
              <GridItem width={6}>
                <span style={{ color: "#666666" }}>
                  <Pill
                    avatarUser={null}
                    icon={undefined}
                    onClick={null}
                    onClose={null}
                    size="small"
                    text="part of our success"
                    variant="primary"
                  />
                </span>
              </GridItem>
              <Spacer size="large" orientation="horizontal" />
              <GridItem width={6}>
                <span style={{ color: "#666666" }}>
                  <Pill
                    avatarUser={null}
                    icon={undefined}
                    onClick={null}
                    onClose={null}
                    size="small"
                    text="key to our success"
                    variant="primary"
                  />
                </span>
              </GridItem>
            </Grid>

            <Spacer size="large" orientation="vertical" />
          </GridItem>
          <GridItem xl={24}>
            {!commentOpen && (
              <Button onClick={() => setCommentOpen(true)} variant="system">
                Add a comment (optional)
              </Button>
            )}
          </GridItem>
          <GridItem xl={24}>
            {commentOpen && (
              <TextArea
                error=""
                maxLength={-1}
                minRows={-1}
                onMention={null}
                optionalLabelText="(optional)"
                placeholder={`let ${feedback.subject} know why you chose this rating`}
                speechBubble={false}
                value={comment}
                onChange={(comment: string) => setComment(comment)}
                active
              />
            )}
            <Spacer size="small" orientation="vertical" />
          </GridItem>
        </Grid>

        <Spacer size="large" orientation="vertical" />
      </GridItem>
      <GridItem xl={24}>
        {!commentOpen && (
          <Button onClick={() => setCommentOpen(true)} variant="system">
            Add a comment (optional)
          </Button>
        )}
      </GridItem>
      <GridItem xl={24}>
        {commentOpen && (
          <TextArea
            error=""
            maxLength={-1}
            minRows={-1}
            onMention={null}
            optionalLabelText="(optional)"
            placeholder={`let ${feedback.subject.name} know why you chose this rating`}
            speechBubble={false}
            value={comment}
            onChange={(comment: string) => setComment(comment)}
            active
          />
        )}
        <Spacer size="small" orientation="vertical" />
      </GridItem>
      <GridItem xl={24}>
        <Text>
          <span style={{ color: "#666666" }}>
            <i>{"Your feedback is shared with Neha anonymously."}</i>
          </span>
        </Text>
        <Spacer size="large" orientation="vertical" />
      </GridItem>
      <GridItem xl={24}>
        <Button onClick={() => rateSomeone()} variant="destructive">
          Submit Feedback
        </Button>
        <Spacer size="medium" orientation="vertical" />
      </GridItem>
      <GridItem xl={24}>
        <Button
          onClick={() => snoozeFeedback()}
          variant="system"
        >
          Remind me later
        </Button>
      </GridItem>
    </Card>
  );
}
