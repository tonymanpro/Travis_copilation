#! /bin/bash
# Merge pushes to development branch to stable branch
if [ ! -n $2 ] ; then
    echo "Usage: merge.sh <username> <password>"
    exit 1;
fi

GIT_USER="$1"
GIT_PASS="$2"
GIT_TOKEN="$3"

# Specify the development branch and stable branch names
CURRENT_BRANCH=$(git log -n 1 --pretty=%d HEAD | cut -d"," -f3 | cut -d" " -f2 | cut -d")" -f1)
echo "current branch is '$CURRENT_BRANCH'"
#TRAVIS_PULL_REQUEST_BRANCH="branche_02"
TO_BRANCH="master"

# Get the current branch
export PAGER=cat

# Create the URL to push merge to 
URL=$(git remote -v | head -n1 | cut -f2 | cut -d" " -f1)
echo "Repo url is $URL"
PUSH_URL="https://$GIT_USER:$GIT_PASS@${URL:6}"

echo "Repo url-2 is $PUSH_URL"

if [ "$CURRENT_BRANCH" = "$TRAVIS_PULL_REQUEST_BRANCH" ] ; then
    # Checkout the dev branch
    #git checkout $TRAVIS_PULL_REQUEST_BRANCH && \
    #echo "Checking out $TO_BRANCH..." && \

    # Checkout the latest stable
    git fetch origin $TO_BRANCH:$TO_BRANCH && \
    git checkout $TO_BRANCH && \

    # Merge the dev into latest stable
    echo "Merging changes..." && \
    git merge $TRAVIS_PULL_REQUEST_BRANCH && \

    # Push changes back to remote vcs
    echo "Pushing changes..." && \
    git push "https://$GIT_USER:$GIT_PASS@github.com/$GIT_USER/TravisBranches.git" && \
    echo "Merge complete!" || \
    echo "Error Occurred. Merge failed"
else

        git clone "https://$GIT_USER:$GIT_PASS@github.com/$GIT_USER/TravisBranches.git" && \
        cd "TravisBranches" && \
        git fetch origin && \
        git checkout -b $TRAVIS_PULL_REQUEST_BRANCH origin/$TRAVIS_PULL_REQUEST_BRANCH && \
        git merge $TO_BRANCH && \
        git checkout $TO_BRANCH && \
        git merge --no-ff $TRAVIS_PULL_REQUEST_BRANCH && \
        git push "https://$GIT_TOKEN@github.com/$GIT_USER/TravisBranches.git" && \
        echo "Merge complete!" || \
        echo "Error Occurred. Merge failed"
fi
