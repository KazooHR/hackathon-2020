import React, { useState } from "react";
import {
  Announcements,
  PageLayout,
  PageLayoutContent,
  PageLayoutSidebar,
  Card,
  Button,
  Divider,
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
export function PopUpFeedback({ currentFeedback, isOpen , setIsOpen, refetch}: { currentFeedback: PopUpFeedbackProps, isOpen: Boolean, setIsOpen: (open: boolean) => void, refetch: Function}) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(2.5);
  const [feedback, setFeedback] = useState(currentFeedback);
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
        {
          isOpen &&
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
              <Button onClick={async () => {
                setIsOpen(false);
                rateSomeone()
                const newFeedback = await refetch();
                setFeedback(newFeedback?.data.currentRequest);
                setComment("");
                setRating(2.5);
                setIsOpen(true);
              }} variant="destructive" style={{ backgroundColor: "#fd5d4b" }}>
                Submit Feedback
              </Button>
              <Spacer size="medium" orientation="vertical" />
            </GridItem>
            <GridItem xl={24}>
              <Button
                  onClick={async () => {
                    setIsOpen(false);
                    snoozeFeedback()
                    const newFeedback = await refetch();
                    setFeedback(newFeedback?.data.currentRequest);
                    setComment("");
                    setRating(2.5);
                    setIsOpen(true);
                  }}
                  variant="system"
              >
                Remind me later
              </Button>
            </GridItem>
          </Card>
        }
      </PageLayoutContent>
      <PageLayoutSidebar>
        <Announcements
          altText=""
          announcements={[
            {
              displayDate: 'Aug 1, 2020',
              id: '0',
              message: 'Dont forget to have fun today. Try to get outside and enjoy summer, but remember to wear a mask!'
            }
          ]}
          logoUrl=""
          onDismiss={null}
          text={{
            dismiss: 'Dismiss',
            less: 'Show Less',
            more: 'Show More',
            title: 'Announcements'
          }}
        />
        <Card background="confetti">
          <Header level="5" size="h5" style={{display: 'inline'}}>Celebrations</Header>
          <div style={{display: 'inline'}}>
            <Pill
              icon="anniversary"
              size="large"
              text="3"
              className="greenPill"
            />
            <Pill
              icon="birthday"
              size="large"
              text="2"
              className="greenPill"
            />
          </div>
          <Divider style={{margin: '8px 0'}}/>
          <Facepile
            size="MEDIUM"
            tag=""
            users={[
              {
                id: 'cde96356-fa50-4dd4-9a72-86b15483fb8a',
                initials: 'ABC',
                jobTitle: 'Human Factors Analyst',
                name: 'Zola Rutherford',
                primaryGroup: 'iterate'
              },
              {
                id: '34f50cea-eb06-468f-be52-77badec4c8d3',
                image160: 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosblanco_eu/128.jpg',
                image30: 'https://s3.amazonaws.com/uifaces/faces/twitter/dshster/128.jpg',
                image70: 'https://s3.amazonaws.com/uifaces/faces/twitter/nerdgr8/128.jpg',
                initials: 'ABC',
                jobTitle: 'Direct Research Supervisor',
                name: 'Kayli Hickle',
                primaryGroup: 'disintermediate',
                profileUrl: '#'
              },
              {
                id: '4f15b10b-da31-4722-979a-7fb777bcb199',
                image160: 'https://s3.amazonaws.com/uifaces/faces/twitter/borges_marcos/128.jpg',
                image30: 'https://s3.amazonaws.com/uifaces/faces/twitter/randomlies/128.jpg',
                image70: 'https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg',
                initials: 'ABC',
                jobTitle: 'Corporate Factors Agent',
                name: 'Mr. Malcolm Kassulke',
                primaryGroup: 'whiteboard',
                profileUrl: '#'
              },
              {
                id: '7d620971-d3e3-474c-80d5-f632574d3c63',
                image160: 'https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg',
                image30: 'https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg',
                image70: 'https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg',
                initials: 'ABC',
                jobTitle: 'Internal Identity Developer',
                name: 'Waldo Mohr',
                primaryGroup: 'enable',
                profileUrl: '#'
              },
              {
                id: '4410bf2d-5517-4ed3-a521-43574ebf17b5',
                image160: 'https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg',
                image30: 'https://s3.amazonaws.com/uifaces/faces/twitter/gusoto/128.jpg',
                image70: 'https://s3.amazonaws.com/uifaces/faces/twitter/richardgarretts/128.jpg',
                initials: 'ABC',
                jobTitle: 'Customer Research Architect',
                name: 'Mr. Murray Zieme',
                primaryGroup: 'enable',
                profileUrl: '#'
              }
            ]}
          />
        </Card>
      </PageLayoutSidebar>
    </PageLayout>
  );
}
