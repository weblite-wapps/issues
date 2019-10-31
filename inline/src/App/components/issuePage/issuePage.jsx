// modules
import React from 'react'
import PropTypes from 'prop-types'
import './issuePage.css'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// helper
import { cns, ab, toPersian } from '../../../helpers/utils'

const useStyles = makeStyles(() => ({
  issueComponent: {
    display: 'flex',
    flexDirection: 'column',
  },
  // header
  header: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  headerTitle: {
    backgroundColor: '#68D200',
    color: '#fff',
    flex: '1 1 155px',
    fontFamily: 'inherit',
    height: 34,
    lineHeight: '34px',
    borderTopLeftRadius: 15,
  },
  headerClosed: {
    backgroundColor: '#e6494f',
  },
  headerImageBox: {
    height: 77,
    width: 84,
    backgroundColor: '#fff',
    borderRadius: '33px 33px 0 0',
    overflow: 'hidden',
  },
  headerImage: {
    verticalAlign: 'bottom',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px 8px 12px',
  },
  fromMe: {
    borderBottomLeftRadius: 15,
  },
  fromOther: {
    borderBottomRightRadius: 15,
  },

  // text
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: '17px',
    color: '#818181',
    letterSpacing: -0.07,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '25px',
    letterSpacing: -0.1,
  },
  questionText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: -0.08,
    color: '#818181',
  },
  // footer
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px',
    alignItems: 'flex-end',
  },
  showIssueButton: {
    color: '#fff',
    fontSize: 10,
    lineHeight: '17px',
    letterSpacing: -0.07,
    backgroundColor: '#5adbdf',
    borderRadius: 12,
    height: 25,
    padding: '3px 9px',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#24a3a7',
    },
  },
  issueInformationBadge: {
    backgroundColor: '#cccccc',
    borderRadius: 10,
    width: 40,
    height: 20,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleIcon: {
    marginLeft: 7,
    verticalAlign: 'bottom',
  },
}))

const IssuePage = ({
  issue: { date: status, title, body, commentsCount: count, isClosed, fromMe },
  onShowIssue,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.issueComponent}>
      <div className={classes.header}>
        <Typography
          align="center"
          className={cns(
            classes.headerTitle,
            ab(classes.headerClosed)(isClosed),
          )}
        >
          11ســــــــــــــوال
        </Typography>
        <div className={classes.headerImageBox}>
          <img
            src="issue.svg"
            alt="issue-icon"
            className={classes.headerImage}
          />
        </div>
      </div>

      <div
        className={cns(
          classes.body,
          fromMe ? classes.fromMe : classes.fromOther,
        )}
      >
        {/* <Typography
          align="right"
          noWrap
          dir="rtl"
          className={classes.statusText}
        >
          {status}
        </Typography> */}
        <Typography
          dir="auto"
          align="right"
          noWrap
          className={classes.titleText}
        >
          {title}
        </Typography>
        <Typography
          dir="auto"
          align="right"
          noWrap
          className={classes.questionText}
        >
          {body}
        </Typography>
        <div className={classes.footer}>
          <Button
            onClick={onShowIssue}
            className={classes.showIssueButton}
            variant="contained"
          >
            مشاهده سوال
          </Button>

          <div
            className={cns(classes.issueInformationBadge, classes.statusText)}
          >
            <span>{toPersian(count)}</span>
            <img src="bubble.svg" alt="bubble" className={classes.bubbleIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

IssuePage.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  count: PropTypes.number,
  isClosed: PropTypes.bool,
  onShowIssue: PropTypes.func,
  fromMe: PropTypes.bool,
}
IssuePage.defaultProps = {
  status: 'سه شنبه ۲۶ شهریور - ۱۴:۲۳',
  title: 'مشکل سرمایش و گرمایش',
  body: 'لورم ایپسوم متن ساختگی با تولید',
  count: 1,
  isClosed: false,
  onShowIssue: Function.prototype,
  fromMe: false,
}

export default IssuePage
